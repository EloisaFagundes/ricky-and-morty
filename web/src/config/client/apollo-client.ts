import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { httpLink } from '../httpLink/apollo-http-link';
import { errorLink } from '../error/apollo-error-link';
import { localCache } from '../cache/apollo-local-cache';

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  connectToDevTools: process.env.NODE_ENV !== 'production',
  cache: localCache,
  assumeImmutableResults: true,
});
