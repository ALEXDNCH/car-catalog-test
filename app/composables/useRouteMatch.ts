export function useRouteMatch() {
  const route = useRoute();

  const sameRoute = (name: string | undefined) => route.name === name;
  return { sameRoute, route };
}
