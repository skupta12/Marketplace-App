"use client"

import { useState } from "react"
import { QueryClient } from "@tanstack/react-query"
import { trpc } from "@/trpc/client";
import { httpBatchLink } from "@trpc/client";

const Providers = () => {

    const [queryClient] = useState(() => QueryClient); // React query
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options) {
                    return fetch(url, {
                        ...options
                    })
                }
            })
        ]
    }))


  return (
    <div>
        
    </div>
  )
}

export default Providers