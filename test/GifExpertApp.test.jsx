import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import React from "react";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe renderizar correctamente el título y la categoría inicial", () => {
    render(<GifExpertApp />);

    // Verificar que el título está presente
    expect(screen.getByText("GifExpertApp")).toBeTruthy();

    // Verificar que la categoría inicial se muestra
    expect(screen.getByText("One Punch")).toBeTruthy();
  });

  test("debe agregar una nueva categoría al escribir en el input y presionar Enter", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox"); // Buscar el input por su rol
    fireEvent.input(input, { target: { value: "Dragon Ball" } }); // Escribir en el input

    const form = screen.getByRole("form"); // Buscar el formulario por su rol
    fireEvent.submit(form); // Simular el envío del formulario

    // Verificar que la nueva categoría se ha agregado al DOM
    expect(screen.getByText("Dragon Ball")).toBeTruthy();
  });

  test("no debe agregar una categoría duplicada", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "One Punch" } }); // Intentar agregar la categoría existente

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    // Verificar que la categoría no se duplica (solo aparece una vez)
    const categories = screen.getAllByText("One Punch");
    expect(categories.length).toBe(1); // Debe haber solo una aparición
  });
});
