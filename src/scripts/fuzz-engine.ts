// Fuzz Pedal sound engine: a thin wrapper around jsfxr (Unlicense, public
// domain — https://github.com/chr15m/jsfxr). Everything runs in the
// visitor's browser; nothing is sent to a server.
import { sfxr } from 'jsfxr';

// Preset names jsfxr understands, matched to the buttons on the panel.
export const PRESETS = {
	'Pickup/coin': 'pickupCoin',
	'Laser/shoot': 'laserShoot',
	Explosion: 'explosion',
	Powerup: 'powerUp',
	'Hit/hurt': 'hitHurt',
	Jump: 'jump',
	'Blip/select': 'blipSelect',
	Synth: 'synth',
	Tone: 'tone',
	Click: 'click',
	Random: 'random',
} as const;

export type PresetName = keyof typeof PRESETS;
// The full set of sound parameters (wave type, envelope, frequency, filters...).
export type SoundParams = ReturnType<typeof sfxr.generate>;

/** New parameters from a preset (each call is slightly different). */
export function fromPreset(name: PresetName): SoundParams {
	return sfxr.generate(PRESETS[name]);
}

/** Play a sound now (Web Audio, in the browser). */
export function play(params: SoundParams) {
	return sfxr.play(params);
}

/** Render to a WAV and return a data: URL, e.g. for a download link. */
export function toWavUrl(params: SoundParams): string {
	return sfxr.toWave(params).dataURI;
}
