import { User } from '../payload-types';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { NextRequest } from 'next/server';

// Function to fetch user data on the server side
export const getServerSideUser = async (
  // The 'cookies' parameter represents cookies in the request
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  try {
    // Attempt to retrieve the token value from the payload-token cookie
    const token = cookies.get('payload-token')?.value;

    // Making an asynchronous fetch request to the server to get user data
    const meRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    // Extracting the 'user' property from the JSON response and casting it to the User type or null
    const { user } = (await meRes.json()) as {
      user: User | null;
    };

    // Returning an object with the user data
    return { user };
  } catch (error) {
    
    console.error('Error fetching user data:', error);
    
    // Returning an object with the user set to null or handling the error in a way that makes sense for your application
    return { user: null };
  }
};
