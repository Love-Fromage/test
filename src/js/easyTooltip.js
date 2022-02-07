! function(t) {
  t.fn.easyTooltip = function(o) {
    function e(t) {
      if ("relative" == o.tooltipPosition) switch (o.tooltipDir) {
        case "top":
          i.css("top", p.offset().top - i.innerHeight() - o.yOffset - o.tooltipArwBorderWidth + "px").css("left", p.offset().left + (p.innerWidth() - i.innerWidth()) / 2 + "px"), r.css({
            left: "50%",
            "margin-left": -o.tooltipArwBorderWidth + "px",
            bottom: 2 * -o.tooltipArwBorderWidth + "px",
            "border-top-color": o.tooltipBgColor
          });
          break;
        case "bottom":
          i.css("top", p.offset().top + p.innerHeight() + o.tooltipArwBorderWidth + o.yOffset + "px").css("left", p.offset().left + (p.innerWidth() - i.innerWidth()) / 2 + "px"), r.css({
            left: "50%",
            "margin-left": -o.tooltipArwBorderWidth + "px",
            top: 2 * -o.tooltipArwBorderWidth + "px",
            "border-bottom-color": o.tooltipBgColor
          });
          break;
        case "left":
          i.css("top", p.offset().top + (p.innerHeight() - i.innerHeight()) / 2 + "px").css("left", p.offset().left - i.innerWidth() - o.tooltipArwBorderWidth - o.xOffset + "px"), r.css({
            top: "50%",
            "margin-top": -o.tooltipArwBorderWidth + "px",
            right: 2 * -o.tooltipArwBorderWidth + "px",
            "border-left-color": o.tooltipBgColor
          });
          break;
        case "right":
          i.css("top", p.offset().top + (p.innerHeight() - i.innerHeight()) / 2 + "px").css("left", p.offset().left + p.innerWidth() + o.tooltipArwBorderWidth + o.xOffset + "px"), r.css({
            top: "50%",
            "margin-top": -o.tooltipArwBorderWidth + "px",
            left: 2 * -o.tooltipArwBorderWidth + "px",
            "border-right-color": o.tooltipBgColor
          });
          break;
        default:
          i.css("top", p.offset().top - i.innerHeight() - o.yOffset + "px").css("left", p.offset().left + (p.innerWidth() - i.innerWidth()) / 2 + "px"), r.css({
            left: "50%",
            "margin-left": -o.tooltipArwBorderWidth + "px",
            bottom: 2 * -o.tooltipArwBorderWidth + "px",
            "border-top-color": o.tooltipBgColor
          })
      } else switch (r.hide(), o.tooltipDir) {
        case "top":
          i.css("top", t.pageY - i.innerHeight() - o.yOffset + "px").css("left", t.pageX - i.innerWidth() / 2 + "px");
          break;
        case "bottom":
          i.css("top", t.pageY + o.yOffset + "px").css("left", t.pageX - i.innerWidth() / 2 + "px");
          break;
        case "left":
          i.css("top", t.pageY - i.innerHeight() / 2 + "px").css("left", t.pageX - i.innerWidth() - o.xOffset + "px");
          break;
        case "right":
          i.css("top", t.pageY - i.innerHeight() / 2 + "px").css("left", t.pageX + o.xOffset + "px");
          break;
        default:
          i.css("top", t.pageY - i.innerHeight() - o.yOffset + "px").css("left", t.pageX - i.innerWidth() / 2 + "px")
      }
    }
    var i, r, o = t.extend({
        tooltipId: "easyTooltip",
        tooltipClass: "easyTooltip",
        content: "",
        existedContentId: "",
        tooltipDir: "top",
        xOffset: 5,
        yOffset: 5,
        clickRemove: !1,
        tooltipPosition: "absolute",
        defaultRadius: "3px",
        tooltipZindex: 1e4,
        tooltipPadding: "10px 15px",
        tooltipBgColor: "rgba(200,200,200,0.7)",
        tooltipFtSize: "14px",
        tooltipLineHeight: "24px",
        tooltipFtColor: "#000",
        tooltipOpacity: 1,
        tooltipArwBorderWidth: 6
      }, o),
      p = t(this),
      s = "" != o.existedContentId ? t("#" + o.existedContentId).html() : "" != o.content ? o.content : title;
    this.each(function() {
      var p = t(this).attr("title");
      t(this).hover(function(p) {
        t(this).attr("title", ""), "" != s && void 0 != s && (t("body").append("<div id='" + o.tooltipId + "' class='" + o.tooltipClass + "'>" + s + "<span class='arw'></span></div>"), i = t("#" + o.tooltipId), r = t("#" + o.tooltipId + " .arw"), i.css({
          position: "absolute",
          "z-index": o.tooltipZindex,
          display: "none",
          padding: o.tooltipPadding,
          "background-color": o.tooltipBgColor,
          "font-size": o.tooltipFtSize,
          "line-height": o.tooltipLineHeight,
          color: o.tooltipFtColor,
          opacity: o.tooltipOpacity,
          "border-radius": o.defaultRadius
        }).fadeIn("fast"), r.css({
          display: "inline-block",
          position: "absolute",
          width: "0",
          height: "0",
          "border-style": "solid",
          "border-width": o.tooltipArwBorderWidth + "px",
          "border-color": "transparent"
        }), e(p))
      }, function() {
        i.remove(), t(this).attr("title", p)
      }), t(this).mousemove(function(t) {
        "relative" != o.tooltipPosition && e(t)
      }), o.clickRemove && t(this).mousedown(function(o) {
        i.remove(), t(this).attr("title", p)
      })
    })
  }
}(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJlYXN5VG9vbHRpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhIGZ1bmN0aW9uKHQpIHtcbiAgdC5mbi5lYXN5VG9vbHRpcCA9IGZ1bmN0aW9uKG8pIHtcbiAgICBmdW5jdGlvbiBlKHQpIHtcbiAgICAgIGlmIChcInJlbGF0aXZlXCIgPT0gby50b29sdGlwUG9zaXRpb24pIHN3aXRjaCAoby50b29sdGlwRGlyKSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICBpLmNzcyhcInRvcFwiLCBwLm9mZnNldCgpLnRvcCAtIGkuaW5uZXJIZWlnaHQoKSAtIG8ueU9mZnNldCAtIG8udG9vbHRpcEFyd0JvcmRlcldpZHRoICsgXCJweFwiKS5jc3MoXCJsZWZ0XCIsIHAub2Zmc2V0KCkubGVmdCArIChwLmlubmVyV2lkdGgoKSAtIGkuaW5uZXJXaWR0aCgpKSAvIDIgKyBcInB4XCIpLCByLmNzcyh7XG4gICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiAtby50b29sdGlwQXJ3Qm9yZGVyV2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICBib3R0b206IDIgKiAtby50b29sdGlwQXJ3Qm9yZGVyV2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICBcImJvcmRlci10b3AtY29sb3JcIjogby50b29sdGlwQmdDb2xvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgaS5jc3MoXCJ0b3BcIiwgcC5vZmZzZXQoKS50b3AgKyBwLmlubmVySGVpZ2h0KCkgKyBvLnRvb2x0aXBBcndCb3JkZXJXaWR0aCArIG8ueU9mZnNldCArIFwicHhcIikuY3NzKFwibGVmdFwiLCBwLm9mZnNldCgpLmxlZnQgKyAocC5pbm5lcldpZHRoKCkgLSBpLmlubmVyV2lkdGgoKSkgLyAyICsgXCJweFwiKSwgci5jc3Moe1xuICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogLW8udG9vbHRpcEFyd0JvcmRlcldpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgdG9wOiAyICogLW8udG9vbHRpcEFyd0JvcmRlcldpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLWNvbG9yXCI6IG8udG9vbHRpcEJnQ29sb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICBpLmNzcyhcInRvcFwiLCBwLm9mZnNldCgpLnRvcCArIChwLmlubmVySGVpZ2h0KCkgLSBpLmlubmVySGVpZ2h0KCkpIC8gMiArIFwicHhcIikuY3NzKFwibGVmdFwiLCBwLm9mZnNldCgpLmxlZnQgLSBpLmlubmVyV2lkdGgoKSAtIG8udG9vbHRpcEFyd0JvcmRlcldpZHRoIC0gby54T2Zmc2V0ICsgXCJweFwiKSwgci5jc3Moe1xuICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IC1vLnRvb2x0aXBBcndCb3JkZXJXaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgIHJpZ2h0OiAyICogLW8udG9vbHRpcEFyd0JvcmRlcldpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgXCJib3JkZXItbGVmdC1jb2xvclwiOiBvLnRvb2x0aXBCZ0NvbG9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgIGkuY3NzKFwidG9wXCIsIHAub2Zmc2V0KCkudG9wICsgKHAuaW5uZXJIZWlnaHQoKSAtIGkuaW5uZXJIZWlnaHQoKSkgLyAyICsgXCJweFwiKS5jc3MoXCJsZWZ0XCIsIHAub2Zmc2V0KCkubGVmdCArIHAuaW5uZXJXaWR0aCgpICsgby50b29sdGlwQXJ3Qm9yZGVyV2lkdGggKyBvLnhPZmZzZXQgKyBcInB4XCIpLCByLmNzcyh7XG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogLW8udG9vbHRpcEFyd0JvcmRlcldpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgbGVmdDogMiAqIC1vLnRvb2x0aXBBcndCb3JkZXJXaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgIFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCI6IG8udG9vbHRpcEJnQ29sb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpLmNzcyhcInRvcFwiLCBwLm9mZnNldCgpLnRvcCAtIGkuaW5uZXJIZWlnaHQoKSAtIG8ueU9mZnNldCArIFwicHhcIikuY3NzKFwibGVmdFwiLCBwLm9mZnNldCgpLmxlZnQgKyAocC5pbm5lcldpZHRoKCkgLSBpLmlubmVyV2lkdGgoKSkgLyAyICsgXCJweFwiKSwgci5jc3Moe1xuICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogLW8udG9vbHRpcEFyd0JvcmRlcldpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgYm90dG9tOiAyICogLW8udG9vbHRpcEFyd0JvcmRlcldpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgXCJib3JkZXItdG9wLWNvbG9yXCI6IG8udG9vbHRpcEJnQ29sb3JcbiAgICAgICAgICB9KVxuICAgICAgfSBlbHNlIHN3aXRjaCAoci5oaWRlKCksIG8udG9vbHRpcERpcikge1xuICAgICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgICAgaS5jc3MoXCJ0b3BcIiwgdC5wYWdlWSAtIGkuaW5uZXJIZWlnaHQoKSAtIG8ueU9mZnNldCArIFwicHhcIikuY3NzKFwibGVmdFwiLCB0LnBhZ2VYIC0gaS5pbm5lcldpZHRoKCkgLyAyICsgXCJweFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgIGkuY3NzKFwidG9wXCIsIHQucGFnZVkgKyBvLnlPZmZzZXQgKyBcInB4XCIpLmNzcyhcImxlZnRcIiwgdC5wYWdlWCAtIGkuaW5uZXJXaWR0aCgpIC8gMiArIFwicHhcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgaS5jc3MoXCJ0b3BcIiwgdC5wYWdlWSAtIGkuaW5uZXJIZWlnaHQoKSAvIDIgKyBcInB4XCIpLmNzcyhcImxlZnRcIiwgdC5wYWdlWCAtIGkuaW5uZXJXaWR0aCgpIC0gby54T2Zmc2V0ICsgXCJweFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgaS5jc3MoXCJ0b3BcIiwgdC5wYWdlWSAtIGkuaW5uZXJIZWlnaHQoKSAvIDIgKyBcInB4XCIpLmNzcyhcImxlZnRcIiwgdC5wYWdlWCArIG8ueE9mZnNldCArIFwicHhcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaS5jc3MoXCJ0b3BcIiwgdC5wYWdlWSAtIGkuaW5uZXJIZWlnaHQoKSAtIG8ueU9mZnNldCArIFwicHhcIikuY3NzKFwibGVmdFwiLCB0LnBhZ2VYIC0gaS5pbm5lcldpZHRoKCkgLyAyICsgXCJweFwiKVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaSwgciwgbyA9IHQuZXh0ZW5kKHtcbiAgICAgICAgdG9vbHRpcElkOiBcImVhc3lUb29sdGlwXCIsXG4gICAgICAgIHRvb2x0aXBDbGFzczogXCJlYXN5VG9vbHRpcFwiLFxuICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICBleGlzdGVkQ29udGVudElkOiBcIlwiLFxuICAgICAgICB0b29sdGlwRGlyOiBcInRvcFwiLFxuICAgICAgICB4T2Zmc2V0OiA1LFxuICAgICAgICB5T2Zmc2V0OiA1LFxuICAgICAgICBjbGlja1JlbW92ZTogITEsXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBkZWZhdWx0UmFkaXVzOiBcIjNweFwiLFxuICAgICAgICB0b29sdGlwWmluZGV4OiAxZTQsXG4gICAgICAgIHRvb2x0aXBQYWRkaW5nOiBcIjEwcHggMTVweFwiLFxuICAgICAgICB0b29sdGlwQmdDb2xvcjogXCJyZ2JhKDIwMCwyMDAsMjAwLDAuNylcIixcbiAgICAgICAgdG9vbHRpcEZ0U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgIHRvb2x0aXBMaW5lSGVpZ2h0OiBcIjI0cHhcIixcbiAgICAgICAgdG9vbHRpcEZ0Q29sb3I6IFwiIzAwMFwiLFxuICAgICAgICB0b29sdGlwT3BhY2l0eTogMSxcbiAgICAgICAgdG9vbHRpcEFyd0JvcmRlcldpZHRoOiA2XG4gICAgICB9LCBvKSxcbiAgICAgIHAgPSB0KHRoaXMpLFxuICAgICAgcyA9IFwiXCIgIT0gby5leGlzdGVkQ29udGVudElkID8gdChcIiNcIiArIG8uZXhpc3RlZENvbnRlbnRJZCkuaHRtbCgpIDogXCJcIiAhPSBvLmNvbnRlbnQgPyBvLmNvbnRlbnQgOiB0aXRsZTtcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcCA9IHQodGhpcykuYXR0cihcInRpdGxlXCIpO1xuICAgICAgdCh0aGlzKS5ob3ZlcihmdW5jdGlvbihwKSB7XG4gICAgICAgIHQodGhpcykuYXR0cihcInRpdGxlXCIsIFwiXCIpLCBcIlwiICE9IHMgJiYgdm9pZCAwICE9IHMgJiYgKHQoXCJib2R5XCIpLmFwcGVuZChcIjxkaXYgaWQ9J1wiICsgby50b29sdGlwSWQgKyBcIicgY2xhc3M9J1wiICsgby50b29sdGlwQ2xhc3MgKyBcIic+XCIgKyBzICsgXCI8c3BhbiBjbGFzcz0nYXJ3Jz48L3NwYW4+PC9kaXY+XCIpLCBpID0gdChcIiNcIiArIG8udG9vbHRpcElkKSwgciA9IHQoXCIjXCIgKyBvLnRvb2x0aXBJZCArIFwiIC5hcndcIiksIGkuY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIFwiei1pbmRleFwiOiBvLnRvb2x0aXBaaW5kZXgsXG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgICAgcGFkZGluZzogby50b29sdGlwUGFkZGluZyxcbiAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogby50b29sdGlwQmdDb2xvcixcbiAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBvLnRvb2x0aXBGdFNpemUsXG4gICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBvLnRvb2x0aXBMaW5lSGVpZ2h0LFxuICAgICAgICAgIGNvbG9yOiBvLnRvb2x0aXBGdENvbG9yLFxuICAgICAgICAgIG9wYWNpdHk6IG8udG9vbHRpcE9wYWNpdHksXG4gICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IG8uZGVmYXVsdFJhZGl1c1xuICAgICAgICB9KS5mYWRlSW4oXCJmYXN0XCIpLCByLmNzcyh7XG4gICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjBcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbiAgICAgICAgICBcImJvcmRlci13aWR0aFwiOiBvLnRvb2x0aXBBcndCb3JkZXJXaWR0aCArIFwicHhcIixcbiAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgfSksIGUocCkpXG4gICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgaS5yZW1vdmUoKSwgdCh0aGlzKS5hdHRyKFwidGl0bGVcIiwgcClcbiAgICAgIH0pLCB0KHRoaXMpLm1vdXNlbW92ZShmdW5jdGlvbih0KSB7XG4gICAgICAgIFwicmVsYXRpdmVcIiAhPSBvLnRvb2x0aXBQb3NpdGlvbiAmJiBlKHQpXG4gICAgICB9KSwgby5jbGlja1JlbW92ZSAmJiB0KHRoaXMpLm1vdXNlZG93bihmdW5jdGlvbihvKSB7XG4gICAgICAgIGkucmVtb3ZlKCksIHQodGhpcykuYXR0cihcInRpdGxlXCIsIHApXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn0oalF1ZXJ5KTtcbiJdLCJmaWxlIjoiZWFzeVRvb2x0aXAuanMifQ==
