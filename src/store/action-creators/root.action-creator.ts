import { playerActions } from '@store/action-creators/player.action-creator'
import { tracksActions } from '@store/action-creators/tracks.action-creator'

export const actionCreators = {
    ...playerActions,
    ...tracksActions,
}
