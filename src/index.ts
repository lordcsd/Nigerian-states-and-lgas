import { states as allStates } from "./states";

export const lgas = (
  state: string
): string[] | undefined => {
  const foundState = Object.values(allStates).find(
    (oneState) =>
      oneState.state.match(new RegExp(state, "i"))
  );

  if (foundState && foundState.lgas) {
    return foundState.lgas;
  }
};

export const all = () => allStates;
export const states = (): string[] =>
  allStates.map((state) => state.state);
