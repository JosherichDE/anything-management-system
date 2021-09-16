import { UniversalArtifact } from '../universe-editor/universal-artifact.model';
import { ArtifactInstance } from './artifact-instance.model';

describe('ArtifactInstance', () => {
  it('should create an instance', () => {
    expect(new ArtifactInstance(new UniversalArtifact())).toBeTruthy();
  });
});
