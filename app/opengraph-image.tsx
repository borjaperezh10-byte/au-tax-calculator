import { ImageResponse } from 'next/og';

export const alt = 'AU Income Tax Calculator 2026-27 - free Australian tax and take-home pay calculator';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0C2C63',
          padding: '64px 72px',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, fontWeight: 700, color: '#3FB857' }}>
          AUIncomeTax.com
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Australian Income Tax Calculator
          </div>
          <div style={{ display: 'flex', fontSize: 40, marginTop: 28, color: '#C9D6EE' }}>
            2026-27 take-home pay, tax brackets, HECS-HELP and the 88-day tracker
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#8FA5CC' }}>
          Free tool. General information only, not tax advice.
        </div>
      </div>
    ),
    { ...size },
  );
}
