import Foundation
import AppKit

// crop.swift <in> <out> <x> <y> <w> <h> <outSize>
let a = CommandLine.arguments
guard let src = NSImage(contentsOfFile: a[1]),
      let cg = src.cgImage(forProposedRect: nil, context: nil, hints: nil) else { exit(1) }
let x = Int(a[3])!, y = Int(a[4])!, w = Int(a[5])!, h = Int(a[6])!, out = Int(a[7])!
guard let cropped = cg.cropping(to: CGRect(x: x, y: y, width: w, height: h)) else { exit(1) }

let cs = CGColorSpaceCreateDeviceRGB()
guard let ctx = CGContext(data: nil, width: out, height: out, bitsPerComponent: 8,
                          bytesPerRow: 0, space: cs,
                          bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue) else { exit(1) }
ctx.interpolationQuality = .high
ctx.draw(cropped, in: CGRect(x: 0, y: 0, width: out, height: out))
guard let final = ctx.makeImage() else { exit(1) }
let rep = NSBitmapImageRep(cgImage: final)
if let data = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.85]) {
    try? data.write(to: URL(fileURLWithPath: a[2]))
    print("wrote \(a[2]) \(out)x\(out)")
}
