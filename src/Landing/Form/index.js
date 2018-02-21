import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  z-index: 102;
`;

export default () => (
  <FormWrapper action="/send.php" method="POST" id="detail-form">
    <input
      class="input"
      type="tel"
      placeholder="Phone"
      name="tel"
      id="tel"
      requried="true"
    />
    <input
      class="input"
      type="text"
      placeholder="Name"
      name="name"
      requried="true"
    />

    <button class="button" type="submit">
      Submit your application
    </button>
  </FormWrapper>
);
