import { Panel, heading, panel, text } from '@metamask/snaps-ui';

export const ErrorComponent = (): Panel => {
  return panel([
    heading('Error while simulating transaction'),
    text(
      `Please contact bytehunter@futurevista.work if you continue seeing this issue. In the meanwhile review this transaction in the Details tab`,
    ),
  ]);
};
