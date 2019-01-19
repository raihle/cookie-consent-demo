import { expect } from "chai";
import { mount } from "@vue/test-utils";
import ConsentGuard from "@/components/cookie-consent/consent-guard.vue";

describe("ConsentGuard.vue", () => {
  it("renders fallback when consent is too low", () => {
    const wrapper = mount(ConsentGuard, {
      context: {
        props: {
          requiredConsentLevel: 2,
          consentLevel: 1
        }
      },
      slots: {
        default: "Default content",
        fallback: "Fallback content"
      }
    });
    expect(wrapper.text()).to.include("Fallback content");
    expect(wrapper.text()).not.to.include("Default content");
  });

  it("renders default when consent is higher", () => {
    const wrapper = mount(ConsentGuard, {
      context: {
        props: {
          requiredConsentLevel: 2,
          consentLevel: 3
        }
      },
      slots: {
        default: "Default content",
        fallback: "Fallback content"
      }
    });
    expect(wrapper.text()).to.include("Default content");
    expect(wrapper.text()).not.to.include("Fallback content");
  });

  it("renders default when consent is equal", () => {
    const wrapper = mount(ConsentGuard, {
      context: {
        props: {
          requiredConsentLevel: 2,
          consentLevel: 2
        }
      },
      slots: {
        default: "Default content",
        fallback: "Fallback content"
      }
    });
    expect(wrapper.text()).to.include("Default content");
    expect(wrapper.text()).not.to.include("Fallback content");
  });
});
