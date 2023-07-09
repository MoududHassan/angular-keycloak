import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'SpringBootKeycloak',
          clientId: 'frontend',
        },
        initOptions: {  
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
          // this will solved the error 
          checkLoginIframe: false
        },
        shouldAddToken: (request) => {
          const { method, url } = request;

          const isGetRequest = 'GET' === method.toUpperCase();
          const acceptablePaths = ['/assets', '/clients/public'];
          const isAcceptablePathMatch = acceptablePaths.some((path) =>
            url.includes(path)
          );

          return !(isGetRequest && isAcceptablePathMatch);
        }
      });
}