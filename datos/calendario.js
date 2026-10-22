/* =========================================================
   CALENDARIO DE PARTIDOS  —  temporada 2026/2027
   =========================================================
   Equipos del grupo (11, uno descansa cada jornada):
     IBROS C.F.
     RECREATIVO DE BAILEN C.F.
     U.D. GUARROMAN
     CLUB DEPORTIVO RUS EQUIPOS DE FUTBOL   <- el nuestro
     BAÑOS CLUB DEPORTIVO 2022
     C.D. CANENA ATLETICO
     C.D. LUPION ATLETICO C.F.
     C.D. ATLETICO MENGIBAR
     CLUB DEPORTIVO REALEB
     VILLARGORDO C.F.
     CLUB DEPORTIVO LOS GACHIS FUTSAL

   Cómo actualizarlo cada semana:
     1. Copia el resultado de la jornada desde Universo RFAF.
     2. Rellena la línea de ese partido con el marcador.
     3. El resultado se escribe SIEMPRE con los goles del Rus DELANTE,
        aunque el partido se haya jugado fuera.

   Campos: jornada, fecha (AAAA-MM-DD), hora, rival, local (true = en Rus),
   resultado, golesFavor y golesContra (los del Rus).
   ========================================================= */

window.DATOS = window.DATOS || {};

window.DATOS.calendario = {

  competicion: "Liga provincial de Jaén",
  grupo: "",
  temporada: "2026/2027",

  fuenteTexto: "Calendario y resultados oficiales de la Real Federación Andaluza de Fútbol.",
  fuenteUrl: "https://www.universorfaf.es/competitions/results/48466104?group=48466107&season=22&delegation=7&round=1",

  /* -------- PARTIDOS JUGADOS (con resultado real) -------- */
  partidos: [
    { jornada: 1, fecha: "2026-09-13", hora: "18:00", rival: "IBROS C.F.",                 local: false, resultado: "0-2", golesFavor: 0, golesContra: 2 },
    { jornada: 2, fecha: "2026-09-20", hora: "18:00", rival: "U.D. GUARROMAN",             local: true,  resultado: "3-2", golesFavor: 3, golesContra: 2 },
    { jornada: 3, fecha: "2026-09-27", hora: "18:00", rival: "C.D. LUPION ATLETICO C.F.",  local: false, resultado: "4-1", golesFavor: 4, golesContra: 1 },

    // --- Jornadas pendientes: rellena fecha, hora y rival cuando la federación
    //     publique el calendario, y el resultado cuando se juegue.
    //     Nombres de rival posibles (según el grupo):
    //       IBROS C.F. · RECREATIVO DE BAILEN C.F. · U.D. GUARROMAN ·
    //       BAÑOS CLUB DEPORTIVO 2022 · C.D. CANENA ATLETICO ·
    //       C.D. LUPION ATLETICO C.F. · C.D. ATLETICO MENGIBAR ·
    //       CLUB DEPORTIVO REALEB · VILLARGORDO C.F. ·
    //       CLUB DEPORTIVO LOS GACHIS FUTSAL

   { jornada: 4, fecha: "2026-10-04", hora: "", rival: "C.D. CANENA ATLÉTICO", local: true, resultado: "3-2", golesFavor: 3, golesContra: 2 },
    { jornada: 5, fecha: "2026-10-10", hora: "19:30", rival: "CLUB DEPORTIVO LOS GACHIS FUTSAL", local: false, resultado: "2-1", golesFavor: 2, golesContra: 1 },
    { jornada: 6, fecha: "", hora: "", rival: "DESCANSA", local: true, resultado: "", golesFavor: null, golesContra: null },
    { jornada: 7, fecha: "2026-10-25", hora: "18:00", rival: "BAÑOS CLUB DEPORTIVO", local: true, resultado: "", golesFavor: null, golesContra: null },
   { jornada: 8, fecha: "2026-11-02", hora: "", rival: "VILLARGORDO C.F.", local: false, resultado: "", golesFavor: null, golesContra: null },
   { jornada: 9, fecha: "2026-11-08", hora: "", rival: "C.D. ATLÉTICO MENGÍBAR", local: true, resultado: "", golesFavor: null, golesContra: null },
   { jornada: 10, fecha: "2026-11-15", hora: "", rival: "RECREATIVO BAILÉN C.F.", local: false, resultado: "", golesFavor: null, golesContra: null },
   { jornada: 11, fecha: "2026-11-22", hora: "", rival: "CLUB DEPORTIVO REALEB", local: true, resultado: "", golesFavor: null, golesContra: null },
 { jornada: 12, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 13, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 14, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 15, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 16, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 17, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 18, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 19, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 20, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 21, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
{ jornada: 22, fecha: "", hora: "", rival: "POR CONFIRMAR", local: null, resultado: "", golesFavor: null, golesContra: null },
