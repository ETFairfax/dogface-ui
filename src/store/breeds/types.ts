export interface IBreedGroup {
    name: string
    breeds: IBreed[]
}

export interface IBreed {
    name: string
}

export interface IBreedsState {
    breedGroups: IBreedGroup[]
}
