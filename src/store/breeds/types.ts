export interface IBreedGroup {
    name: string
    images: string[]
    breeds: IBreed[]
}

export interface IBreed {
    name: string
}

export interface IBreedsState {
    groups: IBreedGroup[]
}

export interface IFetchImageResult {
    group: string
    imageurls: string[]
}
