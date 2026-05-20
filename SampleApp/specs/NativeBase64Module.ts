import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  readonly base64FromArrayBuffer: (buf: Object, urlSafe: boolean) => string;
  readonly base64ToArrayBuffer: (b64: string, removeLinebreaks: boolean) => Object;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeBase64Module',
);
