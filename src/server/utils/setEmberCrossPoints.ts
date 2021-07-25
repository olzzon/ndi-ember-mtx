import { setMatrixConnection } from "../ember/emberLocalClient"

export const setEmberCrossPoints = (crossPoints: any) => {
    crossPoints.forEach((crossPoint: any) => {
        setMatrixConnection(crossPoint.source, crossPoint.target)
    })
}
