# Reto: misma lógica, otro lenguaje

**Grupo 9:** María Sarrió Sánchez · Victor Tikhomirov Lemekha
**Lenguaje:** JavaScript
**Reto:** Bucles

## Qué hace el programa (`correos.js`)

1. Tiene una lista de correos.
2. Con un **`for`** la recorre y se queda solo con los que acaban en `@uji.es`.
3. Con un **`while`** recorre los que quedan y dice el año de matrícula:
   `al40…` → 2020, `al41…` → 2021, `al42…` → 2022.

Para ejecutarlo (opcional): `node correos.js`

## Preguntas

**¿Cómo se declaran las variables?**
Con `let` (si su valor va a cambiar) o `const` (si no cambia). En Python solo se escribe el nombre.

```js
let i = 0;
const correos = ["a@uji.es"];
```

**¿Cómo se delimitan los bloques de código?**
Con llaves `{ }`. En Python se hace con `:` y la sangría (indentación).

**¿Qué cambia en la sintaxis respecto a Python?**

| Python | JavaScript |
|---|---|
| `for correo in correos:` | `for (const correo of correos) { }` |
| `while i < len(lista):` | `while (i < lista.length) { }` |
| `i += 1` | `i++` |
| `print(...)` | `console.log(...)` |
| `lista.append(x)` | `lista.push(x)` |
| `texto.endswith("x")` | `texto.endsWith("x")` |

Además, en JavaScript las condiciones van entre paréntesis `( )` y las líneas suelen acabar en `;`.

**¿Qué parte de la lógica se mantiene igual?**
Toda: el `for` recorre cada elemento de la lista, el `while` repite mientras la condición sea verdadera y hay que aumentar el contador para que no sea infinito. El `if/else` decide igual que en Python.
