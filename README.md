# Electromagnetic Field Data Simulator

High-performance topological electromagnetic coupling simulator using Faraday
tensor computations, Python dataset generation, a Rust reference core, and a
React GitHub Pages visualization.

## Surfaces

| Surface | Path | Purpose |
|---------|------|---------|
| Rust core | `crates/em-field-sim` | Faraday tensor, Lorentz invariants, coupling fields, topology proxy |
| Python generator | `python/em_field_sim` | Reproducible JSON datasets and CLI export |
| React app | `web` | Interactive browser visualization for GitHub Pages |

## Quick Checks

```powershell
cargo test -p em-field-sim
python -m pytest tests/python/test_em_field_sim.py
cd web
npm ci
npm test
npm run build
```

## Dataset Export

```powershell
python -m em_field_sim --kind toroidal_pulse --grid 24 --steps 8 --out web/public/data/sample-scenario.json
```

## Hosted App

The GitHub Pages workflow deploys the React app at:

```text
https://teerthsharma.github.io/Electromagnetic-Field-Data-Simulator/
```

Detailed documentation: [docs/EM_FIELD_DATA_SIMULATOR.md](docs/EM_FIELD_DATA_SIMULATOR.md)
