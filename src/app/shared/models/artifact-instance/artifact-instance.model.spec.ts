import { ArtifactClass } from '../artifact-class/artifact-class.model';
import { ArtifactInstance } from './artifact-instance.model';

describe('ArtifactInstance', () => {
  it('should create an instance', () => {
    expect(ArtifactInstance.Create(new ArtifactClass())).toBeTruthy();
  });
});
