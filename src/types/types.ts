export interface IResponse {
    items: IBook[],
    kind: string,
    totalItems: number
}

export interface IBook {
    etag?: string,
    id?: string,
    volumeInfo?: IVolumeInfo
}

interface IVolumeInfo {
    title?: string,
    description?: string,
    authors?: string[],
    publisher: string,
    publishedDate: string,
    imageLinks?: {
        smallThumbnail?: string,
        thumbnail?: string,
        extraLarge?: string
    },
    categories?: string[]
}