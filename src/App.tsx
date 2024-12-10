import React from "react";
import Button from "./components/ui/Button";
import SectionTemplate from "./components/template/SectionTemplate";
import AppLayout from "./components/layouts/AppLayout";
import { FiArrowRight } from "react-icons/fi";

const App: React.FC = () => {
  return (
    <AppLayout>
      {/* Button Color Variants */}
      <SectionTemplate
        headline="Button Color Variants (Default: Primary)"
        description="Bagian ini menampilkan tombol dengan berbagai warna latar belakang: Primary (biru), Secondary (hijau), dan Accent (abu-abu). Variasi warna ini memungkinkan tombol beradaptasi dengan tema desain yang berbeda.."
      >
        <Button
          label="Primary Button"
          background="primary"
          size="medium"
          onClick={() => alert("Primary Button clicked!")}
        />

        <Button
          label="Secondary Button"
          background="secondary"
          size="medium"
          onClick={() => alert("Secondary Button clicked!")}
        />

        <Button
          label="Accent Button"
          background="accent"
          size="medium"
          onClick={() => alert("Accent Button clicked!")}
        />
      </SectionTemplate>

      {/* Button Icon Variants */}
      <SectionTemplate
        headline="Button Icon Variants"
        description="Bagian ini menunjukkan tombol dengan konfigurasi ikon yang berbeda: tanpa ikon, ikon di sebelah kiri, dan ikon di sebelah kanan."
      >
        <Button
          label="Icon None"
          size="medium"
          onClick={() => alert("Button without icon clicked!")}
        />

        <Button
          label="Icon Left"
          size="medium"
          icon={<FiArrowRight />}
          iconPosition="left"
          onClick={() => alert("Button with left icon clicked!")}
        />

        <Button
          label="Icon Right"
          size="medium"
          icon={<FiArrowRight />}
          iconPosition="right"
          onClick={() => alert("Button with right icon clicked!")}
        />
      </SectionTemplate>

      {/* Button Size Variants */}
      <SectionTemplate
        headline="Button Size Variants (Default: Medium)"
        description="Bagian ini menampilkan tombol dalam ukuran yang berbeda: Kecil, Sedang (default), dan Besar. Variasi ini memenuhi kebutuhan desain yang berbeda."
      >
        <Button label="Small Button" size="small" />
        <Button label="Medium Button" size="medium" />
        <Button label="Large Button" size="large" />
      </SectionTemplate>

      {/* Button Tooltip Variants */}
      <SectionTemplate
        headline="Button Tooltip Variants (Position Default: Top)"
        description="Bagian ini menampilkan tombol dengan tooltip yang muncul di berbagai posisi: Atas (default), Bawah, Kiri, dan Kanan. Jika Button ini menggunakan tooltip, maka box shadow, border, dan transisi akan dihilangkan."
      >
        <Button label="Default" tooltip="Default Tooltip" />
        <Button label="Top" tooltip="Tooltip at Top" tooltipPosition="top" />
        <Button
          label="Bottom"
          tooltip="Tooltip at Bottom"
          tooltipPosition="bottom"
        />
        <Button label="Left" tooltip="Tooltip at Left" tooltipPosition="left" />
        <Button
          label="Right"
          tooltip="Tooltip at Right"
          tooltipPosition="right"
        />
      </SectionTemplate>
    </AppLayout>
  );
};

export default App;
