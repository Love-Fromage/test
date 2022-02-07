function initTooltip() {
	const tooltips = Array.from(document.querySelectorAll('[data-tooltip-container]'));

	tooltips.map(tooltip => {
		tooltip.addEventListener('mouseover', handleMouseOver);
	})

	function handleMouseOver() {
		const tooltipbox = createTooltipBox(this);

		handleMouseMove.tooltipbox = tooltipbox;
		this.addEventListener('mousemove', handleMouseMove);

		handleMouseLeave.tooltipbox = tooltipbox;
		handleMouseLeave.element = this;
		this.addEventListener('mouseleave', handleMouseLeave);
	}

	const handleMouseLeave = {
		handleEvent() {
			this.tooltipbox.remove();
			this.element.removeEventListener('mousemove', handleMouseMove);
			this.element.removeEventListener('mouseleave', handleMouseLeave);
		}
	}

	const handleMouseMove = {
		handleEvent(e) {
			this.tooltipbox.style.top = e.clientY + 25 + 'px';
			this.tooltipbox.style.left = e.clientX + 13 +'px';
		}
	}

	function createTooltipBox(el) {
		let tooltip = document.createElement('div');
		tooltip.innerText = el.getAttribute('data-tooltip-label');
		tooltip.classList.add('tooltip');

		document.body.appendChild(tooltip);
		
		return tooltip;
	}
}

initTooltip();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0b29sdGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRUb29sdGlwKCkge1xyXG5cdGNvbnN0IHRvb2x0aXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b29sdGlwLWNvbnRhaW5lcl0nKSk7XHJcblxyXG5cdHRvb2x0aXBzLm1hcCh0b29sdGlwID0+IHtcclxuXHRcdHRvb2x0aXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTW91c2VPdmVyKTtcclxuXHR9KVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU92ZXIoKSB7XHJcblx0XHRjb25zdCB0b29sdGlwYm94ID0gY3JlYXRlVG9vbHRpcEJveCh0aGlzKTtcclxuXHJcblx0XHRoYW5kbGVNb3VzZU1vdmUudG9vbHRpcGJveCA9IHRvb2x0aXBib3g7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSk7XHJcblxyXG5cdFx0aGFuZGxlTW91c2VMZWF2ZS50b29sdGlwYm94ID0gdG9vbHRpcGJveDtcclxuXHRcdGhhbmRsZU1vdXNlTGVhdmUuZWxlbWVudCA9IHRoaXM7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVNb3VzZUxlYXZlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSB7XHJcblx0XHRoYW5kbGVFdmVudCgpIHtcclxuXHRcdFx0dGhpcy50b29sdGlwYm94LnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVNb3VzZUxlYXZlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHtcclxuXHRcdGhhbmRsZUV2ZW50KGUpIHtcclxuXHRcdFx0dGhpcy50b29sdGlwYm94LnN0eWxlLnRvcCA9IGUuY2xpZW50WSArIDI1ICsgJ3B4JztcclxuXHRcdFx0dGhpcy50b29sdGlwYm94LnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyAxMyArJ3B4JztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVRvb2x0aXBCb3goZWwpIHtcclxuXHRcdGxldCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHR0b29sdGlwLmlubmVyVGV4dCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwLWxhYmVsJyk7XHJcblx0XHR0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKTtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXApO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdG9vbHRpcDtcclxuXHR9XHJcbn1cclxuXHJcbmluaXRUb29sdGlwKCk7Il0sImZpbGUiOiJ0b29sdGlwLmpzIn0=
