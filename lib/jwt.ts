import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface UserPayload extends JWTPayload {
  userId: string;
  email: string;
}

export async function generateToken(payload: UserPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(new TextEncoder().encode(JWT_SECRET));
}

export async function verifyToken(token: string): Promise<UserPayload> {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    return payload as UserPayload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

export function getTokenExpiration(token: string): Date | null {
  try {
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    return payload.exp ? new Date(payload.exp * 1000) : null;
  } catch (error) {
    return null;
  }
}
