import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "t6lpqmgu",
    dataset: "production",
    useCdn: true
})