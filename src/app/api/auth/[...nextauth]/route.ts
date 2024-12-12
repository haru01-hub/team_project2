import { handlers } from 'src/auth' // Referring to the auth.ts we just created
export const { GET, POST } = handlers

import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
