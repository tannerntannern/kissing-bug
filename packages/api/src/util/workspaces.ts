import { resolve } from 'path';
import { shell } from './shell';

type WorkspacesInfo = {
	[name: string]: {
		location: string,
		workspaceDependencies: any[],
		mismatchedWorkspaceDependencies: any[]
	}
};

/**
 * Yarn's `workspaces info` as JSON output.
 */
export const workspacesInfo = (workingDirectory: string) => {
	const yarnOutput = shell('yarn workspaces info --silent', workingDirectory);
	return JSON.parse(yarnOutput) as WorkspacesInfo;
};

/**
 * Runs a shell command in every workspace.
 */
export const workspacesRun = (workingDirectory: string, command: string) => {
	const info = workspacesInfo(workingDirectory);
	for (let name in info) {
		const workspace = info[name];
		shell(command, resolve(workingDirectory, workspace.location));
	}
};
