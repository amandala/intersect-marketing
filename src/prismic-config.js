import Prismic from '@prismicio/client'

const apiEndpoint = 'https://intersectamf.cdn.prismic.io/api/v2'
const accessToken = '' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken });

export default Client;