import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";

import {useNode, Element} from "@craftjs/core";

export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <div className="text-only">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={13} />
      </div>
      <div className="buttons-only">
        <Button
          size="small"
          text="Learn more"
          varian="contained"
          color="primary"
        />
      </div>
    </Container>
  );
};
