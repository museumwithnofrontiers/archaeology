import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'archaeology',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Archaeological Objects',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '9fd48483-773e-56ef-a4ac-80ac9b4f89d0',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '1bdcb311-686f-5698-aa9b-df0727b85070',
    dynasty: {
      item: '9fd48483-773e-56ef-a4ac-80ac9b4f89d0',
      name: 'Umayyads',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
      rows: 15,
      found: 22,
      event: 'Solferino',
      gallery: 13,
      galleryTiles: 9,
      galleryItem: 'Reserve head',
    },
    partner: {
      id: 'a3753de5-842a-5f0b-a8c7-50bb2e312ce6',
      name: 'Kunsthistorisches Museum',
      city: 'Vienna',
      country: 'Austria',
      objects: 13,
      tiles: 9,
    },
  },
})
