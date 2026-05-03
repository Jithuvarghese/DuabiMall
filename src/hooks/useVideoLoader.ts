export const useVideoLoader = (sceneIndex: number, currentSceneIndex: number) => {
  return Math.abs(sceneIndex - currentSceneIndex) <= 1;
};
