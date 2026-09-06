# ── Bootstrap Confidence Interval MASE holdout — versi V2 ──
y_ho = te_A_ho[TARGET].values
pred_ho_v2 = pA_ho_v2[:, 1]

boot_mase_v2 = []
rng_boot = np.random.default_rng(42)
n_data = len(y_ho)

for _ in range(1000):
    idx = rng_boot.integers(0, n_data, n_data)
    mae_b = np.mean(np.abs(y_ho[idx] - pred_ho_v2[idx]))
    boot_mase_v2.append(mae_b / skala_ho["A"])

boot_mase_v2 = np.array(boot_mase_v2)
mase_asli_v2 = np.mean(np.abs(y_ho - pred_ho_v2)) / skala_ho["A"]

print(f"Ukuran sampel holdout Jalur A : {n_data}")
print(f"MASE V2 (titik estimasi)      : {mase_asli_v2:.3f}")
print(f"Interval kepercayaan 90%      : [{np.percentile(boot_mase_v2, 5):.3f}, {np.percentile(boot_mase_v2, 95):.3f}]")

hasil_bootstrap_v2_df = pd.DataFrame([{
    "n": n_data, "MASE_V2": round(mase_asli_v2, 3),
    "CI_90_bawah": round(np.percentile(boot_mase_v2, 5), 3),
    "CI_90_atas": round(np.percentile(boot_mase_v2, 95), 3),
}])
simpan_tabel_bab4(hasil_bootstrap_v2_df, "T4_8q_bootstrap_confidence_mase_holdout_v2")

plt.figure(figsize=(9, 4))
plt.hist(boot_mase, bins=40, alpha=0.5, label="Versi Lama", edgecolor="white")
plt.hist(boot_mase_v2, bins=40, alpha=0.5, label="Versi V2", edgecolor="white")
plt.axvline(1.0, color="red", ls="--", label="MASE = 1")
plt.xlabel("MASE (bootstrap)"); plt.ylabel("Frekuensi")
plt.title("Distribusi Bootstrap MASE Jalur A - Lama vs V2")
plt.legend(); plt.tight_layout()
simpan_gambar_bab4("G4_8d_bootstrap_mase_v1_vs_v2")
plt.show()
