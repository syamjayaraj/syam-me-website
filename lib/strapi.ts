
export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
        }${path}`;
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if it is already a full URL
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }

    // Otherwise prepent the API URL
    return `${getStrapiURL()}${url}`;
}

export async function fetchAPI(
    path: string,
    urlParamsObject = {},
    options = {}
) {
    try {
        // Merge default and user options
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        // Build request URL
        const queryString = new URLSearchParams(urlParamsObject).toString();
        const requestUrl = `${getStrapiURL(
            `/api${path}${queryString ? `?${queryString}` : ""}`
        )}`;

        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);

        // Handle response
        if (!response.ok) {
            console.error(response.statusText);
            throw new Error(`An error occurred please try again`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
    }
}
