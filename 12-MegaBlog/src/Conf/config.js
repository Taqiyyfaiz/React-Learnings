const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDataBaseId: String(import.meta.env.VITE_APP_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APP_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APP_BUCKET_ID),
}

export default conf