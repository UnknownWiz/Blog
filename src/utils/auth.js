import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
 
export const authOptions = ({
  providers: [
    Google({
      clientId: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_WEBAPP_GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_WEBAPP_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_WEBAPP_GITHUB_CLIENT_SECRET,
    }),
  ],
})