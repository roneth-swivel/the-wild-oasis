import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "", // Set an empty string for the avatar, can be updated later
      },
    },
  });

  if (error) throw new Error(`Signup failed: ${error.message}`);

  return data; // Return the user data from signup
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(`Login failed: ${error.message}`);

  return data; // Return session and user information from login
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session?.session) return null; // Return null if no active session

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(`Failed to fetch user: ${error.message}`);

  return data?.user; // Return the user data
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(`Logout failed: ${error.message}`);

  return true; // Optional: Return a success message or flag
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password and/or fullName
  let updateData = {};
  if (password) updateData.password = password;
  if (fullName) updateData.data = { fullName }; // Supabase uses `data` for user metadata

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(`Failed to update user: ${error.message}`);
  if (!avatar) return data; // Return early if no avatar to upload

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Date.now()}`; // Use timestamp for unique filenames

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError)
    throw new Error(`Avatar upload failed: ${storageError.message}`);

  // 3. Update avatar in user profile
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;

  const { data: updatedUser, error: updateError } =
    await supabase.auth.updateUser({
      data: { avatar: avatarUrl },
    });

  if (updateError)
    throw new Error(`Failed to update avatar: ${updateError.message}`);

  return updatedUser; // Return updated user data
}
