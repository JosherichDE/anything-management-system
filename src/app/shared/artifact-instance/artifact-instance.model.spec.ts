import { ArtifactClass } from '../artifact-class/artifact-class.model';
import { ArtifactInstance } from './artifact-instance.model';

describe('ArtifactInstance', () => {
  it('should create an instance', () => {
    expect(new ArtifactInstance(new ArtifactClass())).toBeTruthy();
  });
});
