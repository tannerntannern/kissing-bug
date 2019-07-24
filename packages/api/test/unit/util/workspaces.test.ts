import { describe, it } from 'mocha';
import { expect } from 'chai';

import { resolve } from 'path';

import { workspacesInfo } from '../../../src/util/workspaces';

describe('Workspace Utilities', () => {
    describe('workspacesInfo()', () => {
        it('should work for a standard project', () => {
            const projectPath = resolve(__dirname, '../../__mock-files__/fake-project1');
            const info = workspacesInfo(projectPath);

            expect(info).to.have.keys(['a', 'b'])
        });
    });
});
