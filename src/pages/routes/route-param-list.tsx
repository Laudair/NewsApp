import {News} from './../home/home';

export type RootStackParamList = {
  Home: undefined;
  Details:
    | {
        article: News;
      }
    | undefined;
};
