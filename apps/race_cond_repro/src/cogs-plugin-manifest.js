module.exports =
  /**
   * @type {const}
   * @satisfies {import("@clockworkdog/cogs-client").CogsPluginManifest}
   */
  ({
    name: "race-cond-repro",
    description:
      "Demonstration of a race condition in COGS 5.9 with the plugin data store",
    icon: "./icon.png",
    version: "0.0.0",
    minCogsVersion: "5.6.0",
    config: [],
    events: {
      toCogs: [],
      fromCogs: [],
    },
    state: [],
    store: { items: { testValue: { persistValue: true } } },
    media: {},
  });
