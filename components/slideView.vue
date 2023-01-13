<!-- Please remove this file from your project -->
<template>
  <div class="container" ref="slide-data">
    <div class="reveal">
      <div class="slides">
        <section>
          <section>
            <h2>Benefits</h2>
          </section>
          <section>
            <h3>Strong</h3>
            <p>
              Authentication is ideally backed by a Hardware Security Module,
              which can safely store private keys and perform the cryptographic
              operations needed for WebAuthn.
            </p>
          </section>
          <section>
            <h3>Scoped</h3>
            <p>
              A keypair is only useful for a specific origin, like browser
              cookies. A keypair registered at 'webauthn.guide' cannot be used
              at 'evil-webauthn.guide', mitigating the threat of phishing.
            </p>
          </section>
          <section>
            <h3>Attested</h3>
            <p>
              Authenticators can provide a certificate that helps servers verify
              that the public key did in fact come from an authenticator they
              trust, and not a fraudulent source.
            </p>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/dist/theme/black.css";
export default {
  name: "NuxtTutorial",
  mounted() {
    Reveal.initialize();
  },
};
</script>
<style scoped>
.container {
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}
h3 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
p {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
}
.reveal {
  width: 100%;
  height: 100%;
  position: relative;
}
.slides {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.slides section h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}
.slides section h3 {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
.slides section p {
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
}
</style>
