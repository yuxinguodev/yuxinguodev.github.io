// Fuzz Pedal sound engine: a thin wrapper around jsfxr (Unlicense, public
// domain — https://github.com/chr15m/jsfxr). Everything runs in the
// visitor's browser; nothing is sent to a server.
import { jsfxr } from 'jsfxr';

// jsfxr ships without type definitions, so describe the parts we use.
export interface SoundParams {
	wave_type: number;
	sound_vol: number;
	sample_rate: number;
	sample_size: number;
	[param: string]: number | ((...args: never[]) => unknown);
}
interface Wave {
	buffer: number[]; // normalised samples, -1..1
	clipping: number;
	dataURI: string;
	wav: number[]; // bytes of the .wav file
	getAudio: () => { play: () => void };
}
const lib = jsfxr as unknown as {
	Params: new () => SoundParams;
	SoundEffect: new (p: SoundParams) => { generate: () => Wave };
	convert: { sliders: Record<string, (v: number) => number>; units: Record<string, (v: number) => string> };
	parameters: { signed: string[] };
};

// Panel button label -> jsfxr preset method.
export const PRESETS: Record<string, string> = {
	'Pickup/coin': 'pickupCoin',
	'Laser/shoot': 'laserShoot',
	Explosion: 'explosion',
	Powerup: 'powerUp',
	'Hit/hurt': 'hitHurt',
	Jump: 'jump',
	Click: 'click',
	'Blip/select': 'blipSelect',
	Synth: 'synth',
	Tone: 'tone',
};

/** Parameters that run -1..1 (all others run 0..1). */
export const SIGNED = new Set(lib.parameters.signed);

/** Fresh parameters with jsfxr's defaults. */
export function newParams(): SoundParams {
	return new lib.Params();
}

/** Re-roll `p` from a preset, a full random, or a small mutation (in place). */
export function apply(p: SoundParams, method: string) {
	(p[method] as () => void).call(p);
}

/** Render to audio + WAV (once), so play / waveform / download share it. */
export function render(p: SoundParams): Wave {
	return new lib.SoundEffect(p).generate();
}

/** Human-readable value of one slider, e.g. "0.04444 sec" or "868.0Hz". */
export function label(param: string, value: number): string {
	const toInternal = lib.convert.sliders[param];
	const toUnits = lib.convert.units[param];
	if (!toInternal || !toUnits) return value.toFixed(3);
	return toUnits(toInternal(value)).replace('&plusmn;', '±');
}
