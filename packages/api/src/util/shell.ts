import { execSync } from 'child_process';

/**
 * Executes the given shell command, optionally in the given working directory.
 */
export const shell = (command: string, cwd: string = process.cwd()): string => {
	console.log(command);
	return execSync(command, { encoding: 'utf8', cwd });
};
