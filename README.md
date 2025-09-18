# Dynamic Express API with TypeScript

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![Environment](https://img.shields.io/badge/Config-.env-yellow)

Dieses Projekt ist eine **moderne Express.js-API mit TypeScript**, die folgende Kernfunktionen bietet:

1. **Automatisches Routing**:
   - Dynamisches Laden aller Route-Dateien
   - Keine manuellen Importe notwendig
   - Neue Routen werden automatisch erkannt

2. **TypeScript-Unterstützung**:
   - Volle Typensicherheit
   - Moderne JavaScript-Features
   - Klare Code-Struktur

3. **Umgebungsverwaltung**:
   - Konfiguration über `.env`-Datei
   - Vorkonfigurierte Entwicklungs- und Produktionsumgebung
   - Sensible Daten bleiben geschützt

4. **Developer Experience**:
   - Hot-Reloading im Development-Modus
   - Vorkonfigurierte Build-Pipeline
   - Klare Projektstruktur


**Einsatzgebiete**:
- Schnelle API-Entwicklung
- Microservice-Architekturen
- Prototyping
- Fullstack-Projekte mit TypeScript

**Besonderheit**: Das System lädt alle Verzeichnisse mit `index.ts`-Dateien automatisch als Routen, was manuelle Router-Konfiguration überflüssig macht. Für verschachtelte Routen können Unterverzeichnisse verwendet werden.