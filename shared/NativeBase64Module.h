#pragma once

#include <NativeBase64SpecsJSI.h>

#include <memory>

namespace facebook::react {

class NativeBase64Module : public NativeBase64ModuleCxxSpec<NativeBase64Module> {
public:
  NativeBase64Module(std::shared_ptr<CallInvoker> jsInvoker);

  jsi::String base64FromArrayBuffer(jsi::Runtime& rt, jsi::Object buf, bool urlSafe);
  jsi::Object base64ToArrayBuffer(jsi::Runtime& rt, jsi::String b64, bool removeLinebreaks);
};

} // namespace facebook::react
