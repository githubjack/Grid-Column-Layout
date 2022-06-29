import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { spacingMap } from "./spacingMap";

const Grid = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth ?? "320px"}, 100%), 1fr)
  );
`;
export default function ContactList() {
  return (
    <Grid gutter="xl" minItemWidth="20rem">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}
