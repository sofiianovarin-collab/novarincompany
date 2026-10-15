#!/usr/bin/env python3
"""Rebrand Coinsilium investor PDF to Novarin Capital (name, logos, leadership, public-market metrics)."""

from __future__ import annotations

import shutil
from pathlib import Path

import pymupdf as fitz

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images"
SRC = Path("/home/david/Downloads/Novarin Capital.pdf")
BACKUP = SRC.with_name("Novarin Capital.Coinsilium-backup.pdf")

NAVY = (7 / 255, 29 / 255, 43 / 255)
WHITE = (1, 1, 1)
PAPER = (0.98, 0.98, 0.97)
TEXT_ON_DARK = (0.92, 0.92, 0.92)
TEXT_ON_PAPER = (0.12, 0.14, 0.16)
GOLD = (213 / 255, 177 / 255, 106 / 255)

HEADER_LOGO_RECT = fitz.Rect(807.84, 28.09, 897.84, 70.58)
COVER_WORDMARK_RECT = fitz.Rect(320, 175, 640, 235)
CONTACT_WORDMARK_RECT = fitz.Rect(50.4, 213.17, 280, 290.23)

LEADERS = [
    {
        "name": "Sofiia Tkachenko",
        "title": "Managing Partner",
        "bio": "Investment strategy, capital allocation and founder relationships.",
        "photo": IMAGES / "leadership-managing-partner.jpg",
        "portrait": fitz.Rect(94.32, 184.36, 200.88, 290.95),
    },
    {
        "name": "Vladyslav Blyzniuk",
        "title": "CEO, Partner",
        "bio": "Exchange, wallet and payment assessment with a focus on operating priorities.",
        "photo": IMAGES / "leadership-partner.png",
        "portrait": fitz.Rect(316.8, 184.36, 423.36, 290.95),
    },
    {
        "name": "Vadym Nemyrytskyi",
        "title": "Managing Director, Partner",
        "bio": "Governance, strategic direction and partnership with founders.",
        "photo": IMAGES / "leadership-chairman-president.jpg",
        "portrait": fitz.Rect(538.56, 184.36, 645.12, 290.95),
    },
    {
        "name": "Elena Zelinko",
        "title": "CIO",
        "bio": "Financial reporting, operating controls and administration.",
        "photo": IMAGES / "leadership-cio.jpg",
        "portrait": fitz.Rect(761.04, 184.36, 867.6, 290.95),
    },
]

# Longest phrases first to avoid partial replacements.
TEXT_REPLACEMENTS: list[tuple[str, str]] = [
    ("Building Ventures, Backing Innovation", "Early-stage capital for exchanges, wallets and payments"),
    ("Building Ventures, Backing Innovation since 2014", "Early-stage capital for exchanges, wallets and payments"),
    ("Coinsilium Group Limited", "Novarin Capital"),
    ("https://www.coinsilium.com/investors/bitcoin-treasury-risk-statement", "https://novarin.capital"),
    ("investors@coinsilium.com", "contact@novarin.capital"),
    ("www.coinsilium.com", "novarin.capital"),
    ("coinsilium.com", "novarin.capital"),
    ("registered Coinsilium logo", "Novarin Capital mark"),
    ("Coinsilium's", "Novarin Capital's"),
    ("Coinsilium", "Novarin Capital"),
    ("AQSE: COIN     |     OTCQB: CINGF", "novarin.capital"),
    ("AQSE: COIN | OTCQB: CINGF", "novarin.capital"),
    (
        "Coinsilium Group Limited is a publicly quoted venture builder with more than 10 years of heritage",
        "Novarin Capital is an early-stage investment firm focused on digital-asset exchanges, wallets and stablecoin payment services, with heritage",
    ),
    (
        "Operating through our wholly owned Gibraltar subsidiary,\nCoinsilium combines public market access with an established",
        "Novarin Capital combines disciplined investment judgment with an established",
    ),
    (
        "operational presence in one of the world's leading digital asset\njurisdictions",
        "operating perspective on the businesses that move and hold digital value for customers",
    ),
    (
        "Providing access to Coinsilium’s\nglobal network of investors,",
        "Providing access to Novarin Capital’s\nglobal network of investors,",
    ),
    (
        "Issued by Coinsilium Group Limited (BVI Company No. 1842943).",
        "Issued by Novarin Capital.",
    ),
    (
        "First blockchain company to\nIPO in London in 2015; active\nacross digital assets for more\nthan a decade.",
        "Early-stage focus on exchanges,\nwallets and payment services;\nassessed the way operators\nassess them.",
    ),
]


def redact_region(page: fitz.Page, rect: fitz.Rect, *, fill: tuple[float, float, float]) -> None:
    page.add_redact_annot(rect, fill=fill)
    page.apply_redactions()


def redact_blocks(page: fitz.Page, predicate, *, fill: tuple[float, float, float]) -> None:
    for block in page.get_text("blocks"):
        if predicate(block[4]):
            redact_region(page, fitz.Rect(block[:4]), fill=fill)


def redact_below(page: fitz.Page, y0: float, *, fill: tuple[float, float, float]) -> None:
    redact_region(page, fitz.Rect(0, y0, page.rect.width, page.rect.height), fill=fill)


def replace_text(page: fitz.Page, *, light: bool) -> None:
    fill = PAPER if light else NAVY
    color = TEXT_ON_PAPER if light else TEXT_ON_DARK
    fontsize = 10 if light else 11

    for old, new in TEXT_REPLACEMENTS:
        hits = page.search_for(old)
        if not hits:
            continue
        for rect in hits:
            pad = fitz.Rect(rect.x0 - 1, rect.y0 - 1.5, rect.x1 + 1, rect.y1 + 1.5)
            page.add_redact_annot(pad, fill=fill, text=new, text_color=color, fontname="helv", fontsize=fontsize)
        page.apply_redactions()


def overlay_header_mark(page: fitz.Page) -> None:
    page.draw_rect(HEADER_LOGO_RECT, color=NAVY, fill=NAVY, overlay=True)
    page.insert_image(HEADER_LOGO_RECT, filename=str(IMAGES / "novarin-mark.png"), keep_proportion=True, overlay=True)


def refresh_cover(page: fitz.Page) -> None:
    redact_blocks(page, lambda t: True, fill=NAVY)

    eyebrow = fitz.Rect(49.8, 58, 720, 78)
    page.insert_textbox(
        eyebrow,
        "EXCHANGES · WALLETS · PAYMENTS",
        fontsize=11,
        fontname="helv",
        color=GOLD,
        align=fitz.TEXT_ALIGN_LEFT,
    )
    page.draw_rect(fitz.Rect(473.04, 120.27, 631.44, 190.85), color=NAVY, fill=NAVY, overlay=True)
    page.insert_image(COVER_WORDMARK_RECT, filename=str(IMAGES / "novarin-wordmark-light.png"), keep_proportion=True, overlay=True)
    tagline = fitz.Rect(49.9, 215, 700, 260)
    page.insert_textbox(
        tagline,
        "Early-stage capital for exchanges, wallets and payment services.",
        fontsize=16,
        fontname="helv",
        color=TEXT_ON_DARK,
        align=fitz.TEXT_ALIGN_LEFT,
    )
    contact = fitz.Rect(50.4, 445, 520, 485)
    page.insert_textbox(
        contact,
        "contact@novarin.capital\nOctober 2026",
        fontsize=11,
        fontname="helv",
        color=TEXT_ON_DARK,
    )


def rebuild_leadership(page: fitz.Page) -> None:
    overlay_header_mark(page)
    redact_below(page, 112, fill=(0.04, 0.09, 0.13))
    page.insert_textbox(
        fitz.Rect(42.5, 118, 900, 168),
        "Experienced leadership\nInvestment judgment, sector experience and operating responsibility.",
        fontsize=12,
        fontname="helv",
        color=TEXT_ON_DARK,
        align=fitz.TEXT_ALIGN_LEFT,
    )

    for leader in LEADERS:
        page.draw_rect(leader["portrait"], color=NAVY, fill=NAVY, overlay=True)
        page.insert_image(leader["portrait"], filename=str(leader["photo"]), keep_proportion=True, overlay=True)
        col = fitz.Rect(leader["portrait"].x0 - 8, leader["portrait"].y1 + 8, leader["portrait"].x1 + 8, 520)
        body = f"{leader['name']}\n{leader['title']}\n\n{leader['bio']}"
        page.insert_textbox(col, body, fontsize=8.5, fontname="helv", color=TEXT_ON_DARK, align=fitz.TEXT_ALIGN_LEFT)


def rebuild_fundamentals(page: fitz.Page) -> None:
    overlay_header_mark(page)
    redact_below(page, 100, fill=(0.04, 0.09, 0.13))
    page.insert_textbox(
        fitz.Rect(49, 118, 900, 480),
        "Firm information\n\n"
        "Novarin Capital operates as a private early-stage investment firm. "
        "We do not publish public-market share data, shareholder registers or regulated offering materials on this deck.\n\n"
        "Investment focus\n"
        "Digital-asset exchanges and trading venues; wallets and custody; stablecoin payments, payouts and treasury; "
        "and adjacent infrastructure where the customer is one of those operators.\n\n"
        "What we look for\n"
        "A customer who can be named, a partner set that can be explained and revenue that is visible after partner costs.\n\n"
        "Contact\n"
        "contact@novarin.capital · novarin.capital",
        fontsize=12,
        fontname="helv",
        color=TEXT_ON_DARK,
        align=fitz.TEXT_ALIGN_LEFT,
    )


def refresh_contact(page: fitz.Page) -> None:
    redact_blocks(
        page,
        lambda t: any(k in t for k in ("Coinsilium", "AQSE", "investors@", "CONTACT", "C O NT")),
        fill=NAVY,
    )
    redact_region(page, fitz.Rect(48, 205, 560, 440), fill=(0.04, 0.09, 0.13))
    page.insert_image(CONTACT_WORDMARK_RECT, filename=str(IMAGES / "novarin-wordmark-light.png"), keep_proportion=True, overlay=True)
    page.insert_textbox(
        fitz.Rect(50.4, 310, 520, 430),
        "THANK YOU\n\nNovarin Capital\ncontact@novarin.capital\nnovarin.capital",
        fontsize=12,
        fontname="helv",
        color=TEXT_ON_DARK,
        align=fitz.TEXT_ALIGN_LEFT,
    )


def main() -> None:
    if not SRC.is_file():
        raise SystemExit(f"Missing source PDF: {SRC}")

    if not BACKUP.is_file():
        shutil.copy2(SRC, BACKUP)

    doc = fitz.open(SRC)
    doc.set_metadata(
        {
            "title": "Novarin Capital — Company Presentation",
            "author": "Novarin Capital",
            "subject": "Company presentation",
        }
    )

    for index, page in enumerate(doc):
        light = index == 1  # disclaimer slide

        if index == 0:
            refresh_cover(page)
        elif index in {1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17}:
            if index != 1:
                try:
                    overlay_header_mark(page)
                except Exception:
                    pass
        elif index == 4:
            rebuild_leadership(page)
        elif index == 18:
            rebuild_fundamentals(page)
        elif index == 19:
            refresh_contact(page)

        if index != 0:
            replace_text(page, light=light)

    tmp = SRC.with_suffix(".rebrand-tmp.pdf")
    doc.save(tmp, garbage=4, deflate=True)
    doc.close()
    tmp.replace(SRC)
    print(f"Updated: {SRC}")
    print(f"Backup:  {BACKUP}")


if __name__ == "__main__":
    main()
