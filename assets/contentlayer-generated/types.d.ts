// NOTE This file is auto-generated by the Contentlayer CLI

import type { Markdown, MDX } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

// export type Image = string
export type { Markdown, MDX }

/** Document types */

export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  /** The title of the page */
  title: string
  /** Markdown file body */
  body: Markdown
  /** The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/" */
  url: string
}

/** Nested types */

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

// declare global {
//   interface ContentlayerGen extends ContentlayerGenTypes {}
// }

