# Find CSS Vars

CLI script to find all the (`:root`) CSS Variables in a given CSS file.

```bash
find-css-vars ./my.css [./output.json]
```

Note the output path is optional.

Example output:

```json
{
  "--blue": "#007bff",
  "--indigo": "#6610f2"
}
```
